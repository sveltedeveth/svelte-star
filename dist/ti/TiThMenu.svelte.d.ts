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
export type TiThMenuProps = typeof __propDef.props;
export type TiThMenuEvents = typeof __propDef.events;
export type TiThMenuSlots = typeof __propDef.slots;
export default class TiThMenu extends SvelteComponentTyped<TiThMenuProps, TiThMenuEvents, TiThMenuSlots> {
}
export {};
