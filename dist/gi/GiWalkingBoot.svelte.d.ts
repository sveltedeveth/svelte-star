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
export type GiWalkingBootProps = typeof __propDef.props;
export type GiWalkingBootEvents = typeof __propDef.events;
export type GiWalkingBootSlots = typeof __propDef.slots;
export default class GiWalkingBoot extends SvelteComponentTyped<GiWalkingBootProps, GiWalkingBootEvents, GiWalkingBootSlots> {
}
export {};
