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
export type GiStarFormationProps = typeof __propDef.props;
export type GiStarFormationEvents = typeof __propDef.events;
export type GiStarFormationSlots = typeof __propDef.slots;
export default class GiStarFormation extends SvelteComponentTyped<GiStarFormationProps, GiStarFormationEvents, GiStarFormationSlots> {
}
export {};
