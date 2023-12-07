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
export type TiThSmallProps = typeof __propDef.props;
export type TiThSmallEvents = typeof __propDef.events;
export type TiThSmallSlots = typeof __propDef.slots;
export default class TiThSmall extends SvelteComponentTyped<TiThSmallProps, TiThSmallEvents, TiThSmallSlots> {
}
export {};
