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
export type GiGuardsProps = typeof __propDef.props;
export type GiGuardsEvents = typeof __propDef.events;
export type GiGuardsSlots = typeof __propDef.slots;
export default class GiGuards extends SvelteComponentTyped<GiGuardsProps, GiGuardsEvents, GiGuardsSlots> {
}
export {};
