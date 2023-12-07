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
export type FaCubesProps = typeof __propDef.props;
export type FaCubesEvents = typeof __propDef.events;
export type FaCubesSlots = typeof __propDef.slots;
export default class FaCubes extends SvelteComponentTyped<FaCubesProps, FaCubesEvents, FaCubesSlots> {
}
export {};
