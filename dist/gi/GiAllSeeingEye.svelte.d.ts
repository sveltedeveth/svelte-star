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
export type GiAllSeeingEyeProps = typeof __propDef.props;
export type GiAllSeeingEyeEvents = typeof __propDef.events;
export type GiAllSeeingEyeSlots = typeof __propDef.slots;
export default class GiAllSeeingEye extends SvelteComponentTyped<GiAllSeeingEyeProps, GiAllSeeingEyeEvents, GiAllSeeingEyeSlots> {
}
export {};
