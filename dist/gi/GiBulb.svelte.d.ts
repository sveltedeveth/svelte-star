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
export type GiBulbProps = typeof __propDef.props;
export type GiBulbEvents = typeof __propDef.events;
export type GiBulbSlots = typeof __propDef.slots;
export default class GiBulb extends SvelteComponentTyped<GiBulbProps, GiBulbEvents, GiBulbSlots> {
}
export {};
