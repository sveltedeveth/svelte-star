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
export type MdDataUsageProps = typeof __propDef.props;
export type MdDataUsageEvents = typeof __propDef.events;
export type MdDataUsageSlots = typeof __propDef.slots;
export default class MdDataUsage extends SvelteComponentTyped<MdDataUsageProps, MdDataUsageEvents, MdDataUsageSlots> {
}
export {};
