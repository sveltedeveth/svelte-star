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
export type MdLocalSeeProps = typeof __propDef.props;
export type MdLocalSeeEvents = typeof __propDef.events;
export type MdLocalSeeSlots = typeof __propDef.slots;
export default class MdLocalSee extends SvelteComponentTyped<MdLocalSeeProps, MdLocalSeeEvents, MdLocalSeeSlots> {
}
export {};
