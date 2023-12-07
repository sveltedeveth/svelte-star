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
export type MdLayersProps = typeof __propDef.props;
export type MdLayersEvents = typeof __propDef.events;
export type MdLayersSlots = typeof __propDef.slots;
export default class MdLayers extends SvelteComponentTyped<MdLayersProps, MdLayersEvents, MdLayersSlots> {
}
export {};
