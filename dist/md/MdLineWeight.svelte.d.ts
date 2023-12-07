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
export type MdLineWeightProps = typeof __propDef.props;
export type MdLineWeightEvents = typeof __propDef.events;
export type MdLineWeightSlots = typeof __propDef.slots;
export default class MdLineWeight extends SvelteComponentTyped<MdLineWeightProps, MdLineWeightEvents, MdLineWeightSlots> {
}
export {};
