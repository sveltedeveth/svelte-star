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
export type TiUserAddProps = typeof __propDef.props;
export type TiUserAddEvents = typeof __propDef.events;
export type TiUserAddSlots = typeof __propDef.slots;
export default class TiUserAdd extends SvelteComponentTyped<TiUserAddProps, TiUserAddEvents, TiUserAddSlots> {
}
export {};
