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
export type GiChimneyProps = typeof __propDef.props;
export type GiChimneyEvents = typeof __propDef.events;
export type GiChimneySlots = typeof __propDef.slots;
export default class GiChimney extends SvelteComponentTyped<GiChimneyProps, GiChimneyEvents, GiChimneySlots> {
}
export {};
