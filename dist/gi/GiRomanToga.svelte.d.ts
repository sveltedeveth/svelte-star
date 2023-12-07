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
export type GiRomanTogaProps = typeof __propDef.props;
export type GiRomanTogaEvents = typeof __propDef.events;
export type GiRomanTogaSlots = typeof __propDef.slots;
export default class GiRomanToga extends SvelteComponentTyped<GiRomanTogaProps, GiRomanTogaEvents, GiRomanTogaSlots> {
}
export {};
