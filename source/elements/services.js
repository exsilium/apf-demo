/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 *
 */

// #ifdef __AMLSERVICES || __INC_ALL

/**
 *
 * @author      Ruben Daniels (ruben AT javeline DOT com)
 * @version     %I%, %G%
 * @since       0.4
 */
apf.services = function(struct, tagName){
    this.$init(tagName || "services", apf.NODE_VISIBLE, struct);
    
    this.addEventListener("DOMNodeInsertedIntoDocument", function(aml){
        var pNode = this.parentNode;
        if (pNode.register)
            pNode.register(this);
    });
};

apf.services.prototype = new apf.AmlElement();
apf.aml.setElement("services", apf.services);

// #endif
