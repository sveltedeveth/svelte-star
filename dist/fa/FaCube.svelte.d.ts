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
export type FaCubeProps = typeof __propDef.props;
export type FaCubeEvents = typeof __propDef.events;
export type FaCubeSlots = typeof __propDef.slots;
export default class FaCube extends SvelteComponentTyped<FaCubeProps, FaCubeEvents, FaCubeSlots> {
}
export {};
