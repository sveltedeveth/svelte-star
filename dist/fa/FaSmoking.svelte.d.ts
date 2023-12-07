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
export type FaSmokingProps = typeof __propDef.props;
export type FaSmokingEvents = typeof __propDef.events;
export type FaSmokingSlots = typeof __propDef.slots;
export default class FaSmoking extends SvelteComponentTyped<FaSmokingProps, FaSmokingEvents, FaSmokingSlots> {
}
export {};
