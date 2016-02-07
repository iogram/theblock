class Contact < ActiveRecord::Base
    class Contact < ActiveRecord::Base
      validates :name, presence: true
      validates :email, presence: true
    end
end