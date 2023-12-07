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
export type TiThListOutlineProps = typeof __propDef.props;
export type TiThListOutlineEvents = typeof __propDef.events;
export type TiThListOutlineSlots = typeof __propDef.slots;
export default class TiThListOutline extends SvelteComponentTyped<TiThListOutlineProps, TiThListOutlineEvents, TiThListOutlineSlots> {
}
export {};
