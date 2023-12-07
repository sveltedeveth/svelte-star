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
export type GiThreeFriendsProps = typeof __propDef.props;
export type GiThreeFriendsEvents = typeof __propDef.events;
export type GiThreeFriendsSlots = typeof __propDef.slots;
export default class GiThreeFriends extends SvelteComponentTyped<GiThreeFriendsProps, GiThreeFriendsEvents, GiThreeFriendsSlots> {
}
export {};
