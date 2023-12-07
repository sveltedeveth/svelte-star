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
export type FaFlagUsaProps = typeof __propDef.props;
export type FaFlagUsaEvents = typeof __propDef.events;
export type FaFlagUsaSlots = typeof __propDef.slots;
export default class FaFlagUsa extends SvelteComponentTyped<FaFlagUsaProps, FaFlagUsaEvents, FaFlagUsaSlots> {
}
export {};
