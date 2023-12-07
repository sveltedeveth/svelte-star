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
export type GiSunRadiationsProps = typeof __propDef.props;
export type GiSunRadiationsEvents = typeof __propDef.events;
export type GiSunRadiationsSlots = typeof __propDef.slots;
export default class GiSunRadiations extends SvelteComponentTyped<GiSunRadiationsProps, GiSunRadiationsEvents, GiSunRadiationsSlots> {
}
export {};
