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
export type GoVerifiedProps = typeof __propDef.props;
export type GoVerifiedEvents = typeof __propDef.events;
export type GoVerifiedSlots = typeof __propDef.slots;
export default class GoVerified extends SvelteComponentTyped<GoVerifiedProps, GoVerifiedEvents, GoVerifiedSlots> {
}
export {};
