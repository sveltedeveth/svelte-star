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
export type GiCoconutsProps = typeof __propDef.props;
export type GiCoconutsEvents = typeof __propDef.events;
export type GiCoconutsSlots = typeof __propDef.slots;
export default class GiCoconuts extends SvelteComponentTyped<GiCoconutsProps, GiCoconutsEvents, GiCoconutsSlots> {
}
export {};
