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
export type TiUserDeleteProps = typeof __propDef.props;
export type TiUserDeleteEvents = typeof __propDef.events;
export type TiUserDeleteSlots = typeof __propDef.slots;
export default class TiUserDelete extends SvelteComponentTyped<TiUserDeleteProps, TiUserDeleteEvents, TiUserDeleteSlots> {
}
export {};
