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
export type FaSnowboardingProps = typeof __propDef.props;
export type FaSnowboardingEvents = typeof __propDef.events;
export type FaSnowboardingSlots = typeof __propDef.slots;
export default class FaSnowboarding extends SvelteComponentTyped<FaSnowboardingProps, FaSnowboardingEvents, FaSnowboardingSlots> {
}
export {};
