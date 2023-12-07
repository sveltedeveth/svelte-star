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
export type GiRadiationsProps = typeof __propDef.props;
export type GiRadiationsEvents = typeof __propDef.events;
export type GiRadiationsSlots = typeof __propDef.slots;
export default class GiRadiations extends SvelteComponentTyped<GiRadiationsProps, GiRadiationsEvents, GiRadiationsSlots> {
}
export {};
