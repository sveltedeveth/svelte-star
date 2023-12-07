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
export type FaSplotchProps = typeof __propDef.props;
export type FaSplotchEvents = typeof __propDef.events;
export type FaSplotchSlots = typeof __propDef.slots;
export default class FaSplotch extends SvelteComponentTyped<FaSplotchProps, FaSplotchEvents, FaSplotchSlots> {
}
export {};
