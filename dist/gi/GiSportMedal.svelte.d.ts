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
export type GiSportMedalProps = typeof __propDef.props;
export type GiSportMedalEvents = typeof __propDef.events;
export type GiSportMedalSlots = typeof __propDef.slots;
export default class GiSportMedal extends SvelteComponentTyped<GiSportMedalProps, GiSportMedalEvents, GiSportMedalSlots> {
}
export {};
