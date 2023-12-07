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
export type FaDigitalTachographProps = typeof __propDef.props;
export type FaDigitalTachographEvents = typeof __propDef.events;
export type FaDigitalTachographSlots = typeof __propDef.slots;
export default class FaDigitalTachograph extends SvelteComponentTyped<FaDigitalTachographProps, FaDigitalTachographEvents, FaDigitalTachographSlots> {
}
export {};
