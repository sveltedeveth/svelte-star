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
export type IoLogoBitbucketProps = typeof __propDef.props;
export type IoLogoBitbucketEvents = typeof __propDef.events;
export type IoLogoBitbucketSlots = typeof __propDef.slots;
export default class IoLogoBitbucket extends SvelteComponentTyped<IoLogoBitbucketProps, IoLogoBitbucketEvents, IoLogoBitbucketSlots> {
}
export {};
