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
export type FaSurpriseProps = typeof __propDef.props;
export type FaSurpriseEvents = typeof __propDef.events;
export type FaSurpriseSlots = typeof __propDef.slots;
export default class FaSurprise extends SvelteComponentTyped<FaSurpriseProps, FaSurpriseEvents, FaSurpriseSlots> {
}
export {};
