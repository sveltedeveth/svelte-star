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
export type MdVerifiedUserProps = typeof __propDef.props;
export type MdVerifiedUserEvents = typeof __propDef.events;
export type MdVerifiedUserSlots = typeof __propDef.slots;
export default class MdVerifiedUser extends SvelteComponentTyped<MdVerifiedUserProps, MdVerifiedUserEvents, MdVerifiedUserSlots> {
}
export {};
