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
export type GiGoblinCampProps = typeof __propDef.props;
export type GiGoblinCampEvents = typeof __propDef.events;
export type GiGoblinCampSlots = typeof __propDef.slots;
export default class GiGoblinCamp extends SvelteComponentTyped<GiGoblinCampProps, GiGoblinCampEvents, GiGoblinCampSlots> {
}
export {};
