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
export type GiBrainStemProps = typeof __propDef.props;
export type GiBrainStemEvents = typeof __propDef.events;
export type GiBrainStemSlots = typeof __propDef.slots;
export default class GiBrainStem extends SvelteComponentTyped<GiBrainStemProps, GiBrainStemEvents, GiBrainStemSlots> {
}
export {};
