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
export type TiUserProps = typeof __propDef.props;
export type TiUserEvents = typeof __propDef.events;
export type TiUserSlots = typeof __propDef.slots;
export default class TiUser extends SvelteComponentTyped<TiUserProps, TiUserEvents, TiUserSlots> {
}
export {};
