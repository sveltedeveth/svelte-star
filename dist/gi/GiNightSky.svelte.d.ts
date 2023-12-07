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
export type GiNightSkyProps = typeof __propDef.props;
export type GiNightSkyEvents = typeof __propDef.events;
export type GiNightSkySlots = typeof __propDef.slots;
export default class GiNightSky extends SvelteComponentTyped<GiNightSkyProps, GiNightSkyEvents, GiNightSkySlots> {
}
export {};
