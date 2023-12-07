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
export type GiMuscleUpProps = typeof __propDef.props;
export type GiMuscleUpEvents = typeof __propDef.events;
export type GiMuscleUpSlots = typeof __propDef.slots;
export default class GiMuscleUp extends SvelteComponentTyped<GiMuscleUpProps, GiMuscleUpEvents, GiMuscleUpSlots> {
}
export {};
