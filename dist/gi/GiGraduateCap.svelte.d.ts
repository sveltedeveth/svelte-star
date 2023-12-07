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
export type GiGraduateCapProps = typeof __propDef.props;
export type GiGraduateCapEvents = typeof __propDef.events;
export type GiGraduateCapSlots = typeof __propDef.slots;
export default class GiGraduateCap extends SvelteComponentTyped<GiGraduateCapProps, GiGraduateCapEvents, GiGraduateCapSlots> {
}
export {};
