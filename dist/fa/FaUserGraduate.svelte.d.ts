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
export type FaUserGraduateProps = typeof __propDef.props;
export type FaUserGraduateEvents = typeof __propDef.events;
export type FaUserGraduateSlots = typeof __propDef.slots;
export default class FaUserGraduate extends SvelteComponentTyped<FaUserGraduateProps, FaUserGraduateEvents, FaUserGraduateSlots> {
}
export {};
