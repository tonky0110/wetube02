import routes from '../routes';
import User from '../models/User';

export const getJoin = (req, res) => {
	res.render('Join', { pageTitle: 'Join' });
};

export const postJoin = async (req, res) => {
	const { body: { name, email, password, password2 } } = req;
	// console.log(name, email, password, password2);
	if (password !== password2) {
		res.status(400);
		res.render('Join', { pageTitle: 'Join' });
	} else {
		// To do: Register User
		try {
			const user = await User({
				name,
				email
			});
			await User.register(user, password);
		} catch (error) {
			console.log(error);
		}
		// To Do: Log User in
		res.redirect(routes.home);
	}
};
export const getLogin = (req, res) => res.render('Login', { pageTitle: 'Login' });

export const postLogin = (req, res) => {
	const { body: { email, password } } = req;
	res.redirect(routes.home);
};

export const logout = (req, res) => {
	// To Do: Process Log Out
	res.redirect(routes.home);
};

export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'Edit Profile' });

export const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'Change Password' });

export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail' });
