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
export type IoMdBulbProps = typeof __propDef.props;
export type IoMdBulbEvents = typeof __propDef.events;
export type IoMdBulbSlots = typeof __propDef.slots;
export default class IoMdBulb extends SvelteComponentTyped<IoMdBulbProps, IoMdBulbEvents, IoMdBulbSlots> {
}
export {};
