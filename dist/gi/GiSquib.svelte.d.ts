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
export type GiSquibProps = typeof __propDef.props;
export type GiSquibEvents = typeof __propDef.events;
export type GiSquibSlots = typeof __propDef.slots;
export default class GiSquib extends SvelteComponentTyped<GiSquibProps, GiSquibEvents, GiSquibSlots> {
}
export {};
