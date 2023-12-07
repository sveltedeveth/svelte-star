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
export type GiHabitatDomeProps = typeof __propDef.props;
export type GiHabitatDomeEvents = typeof __propDef.events;
export type GiHabitatDomeSlots = typeof __propDef.slots;
export default class GiHabitatDome extends SvelteComponentTyped<GiHabitatDomeProps, GiHabitatDomeEvents, GiHabitatDomeSlots> {
}
export {};
