export const links = [
    {
        'id': 1,
        'title': "Dashboard",
        'description': "",
        'icon': 'HomeIcon',
        'url': '/dashboard/overview'
    },
    {
        'id': 2,
        'title': "Customers",
        'description': "",
        'icon': 'UserGroupIcon',
        'url': '/dashboard/customers',
        'children': [
            {
                'id': 2.1,
                'title': "Overview",
                'description': "",
                'icon': '',
                'url': '/dashboard/customers/overview',
            },
            {
                'id': 2.2,
                'title': "Add a Customer",
                'description': "",
                'icon': '',
                'url': '/dashboard/customers/add',

            }

        ]
    },
    {
        'id': 3,
        'title': "Users",
        'description': "",
        'icon': 'UsersIcon',
        'url': '/dashboard/users',
        'children': [
            {
                'id': 3.1,
                'title': "Overview",
                'description': "",
                'icon': '',
                'url': '/dashboard/users/overview',

            },
            {
                'id': 3.2,
                'title': "Add a User",
                'description': "",
                'icon': '',
                'url': '/dashboard/users/add',

            },


        ]
    },
    {
        'id': 4,
        'title': "Wishlist",
        'description': "",
        'icon': 'ShoppingBagIcon',
        'url': '/dashboard/wishlist',
        'children': [
            {
                'id': 4.1,
                'title': "Overview",
                'description': "",
                'icon': '',
                'url': '/dashboard/wishlist/overview',

            },
        ]
    },
    {
        'id': 5,
        'title': "Help",
        'description': "",
        'icon': 'QuestionMarkCircleIcon',
        'url': '/dashboard/help'
    },



]