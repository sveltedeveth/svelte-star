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
export type FaSellcastProps = typeof __propDef.props;
export type FaSellcastEvents = typeof __propDef.events;
export type FaSellcastSlots = typeof __propDef.slots;
export default class FaSellcast extends SvelteComponentTyped<FaSellcastProps, FaSellcastEvents, FaSellcastSlots> {
}
export {};
