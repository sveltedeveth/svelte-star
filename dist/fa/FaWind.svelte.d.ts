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
export type FaWindProps = typeof __propDef.props;
export type FaWindEvents = typeof __propDef.events;
export type FaWindSlots = typeof __propDef.slots;
export default class FaWind extends SvelteComponentTyped<FaWindProps, FaWindEvents, FaWindSlots> {
}
export {};
