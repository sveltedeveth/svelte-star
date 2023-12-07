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
export type GiStarPupilProps = typeof __propDef.props;
export type GiStarPupilEvents = typeof __propDef.events;
export type GiStarPupilSlots = typeof __propDef.slots;
export default class GiStarPupil extends SvelteComponentTyped<GiStarPupilProps, GiStarPupilEvents, GiStarPupilSlots> {
}
export {};
