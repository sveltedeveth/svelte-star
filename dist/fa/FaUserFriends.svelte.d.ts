import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaUserFriendsProps = typeof __propDef.props;
export type FaUserFriendsEvents = typeof __propDef.events;
export type FaUserFriendsSlots = typeof __propDef.slots;
export default class FaUserFriends extends SvelteComponentTyped<FaUserFriendsProps, FaUserFriendsEvents, FaUserFriendsSlots> {
}
export {};
