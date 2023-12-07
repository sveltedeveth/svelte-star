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
export type FaRaspberryPiProps = typeof __propDef.props;
export type FaRaspberryPiEvents = typeof __propDef.events;
export type FaRaspberryPiSlots = typeof __propDef.slots;
export default class FaRaspberryPi extends SvelteComponentTyped<FaRaspberryPiProps, FaRaspberryPiEvents, FaRaspberryPiSlots> {
}
export {};
