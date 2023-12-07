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
export type GiGrapesProps = typeof __propDef.props;
export type GiGrapesEvents = typeof __propDef.events;
export type GiGrapesSlots = typeof __propDef.slots;
export default class GiGrapes extends SvelteComponentTyped<GiGrapesProps, GiGrapesEvents, GiGrapesSlots> {
}
export {};
