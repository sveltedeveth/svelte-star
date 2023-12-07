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
export type FaSadTearProps = typeof __propDef.props;
export type FaSadTearEvents = typeof __propDef.events;
export type FaSadTearSlots = typeof __propDef.slots;
export default class FaSadTear extends SvelteComponentTyped<FaSadTearProps, FaSadTearEvents, FaSadTearSlots> {
}
export {};
